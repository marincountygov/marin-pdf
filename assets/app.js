// App-specific behavior only. Standard menu, dialog, and navigation behavior
// already come from shared/app-shell.js — do not reimplement them here.

document.addEventListener("DOMContentLoaded", () => {
  const START_STEP = "updated";

  // A fixed decision tree, not a Decision Maker-style editable flow — this app
  // has exactly one flow and never needs an authoring UI. Each step's
  // "yes"/"no" is either the id of the next step, or a terminal outcome
  // object ({ title, body, steps, note }) to render directly.
  const steps = {
    updated: {
      question: "Will the PDF be updated regularly?",
      yesLabel: "Yes, it will be updated regularly",
      noLabel: "No, it won't be updated regularly",
      yes: {
        title: "Don't use a PDF",
        body: "Consider making it a webpage instead.",
      },
      no: "webpage",
    },
    webpage: {
      question: "Can this content be a webpage instead of a PDF?",
      yesLabel: "Yes, it can be a webpage",
      noLabel: "No, it can't be a webpage",
      yes: {
        title: "Use a webpage instead",
        body: "Move the content to a webpage on your department site.",
      },
      no: "form",
    },
    form: {
      question: "Is the PDF you are creating a fillable form?",
      yesLabel: "Yes, it's a fillable form",
      noLabel: "No, it's not a fillable form",
      yes: {
        title: "Use a form tool instead",
        body: "Create a JotForm or Microsoft Form instead.",
        note: "Submit a helpdesk ticket if you need assistance.",
      },
      no: {
        title: "This meets PDF requirements.",
        steps: [
          "Remediate the final PDF for accessibility.",
          "Send final PDF to helpdesk with “Remediation” in the subject line.",
        ],
      },
    },
  };

  const flowStep = document.querySelector("#flow-step");
  let current = START_STEP;

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function goTo(target) {
    current = target;
    render();
  }

  function renderQuestion(step) {
    flowStep.innerHTML = `
      <h2>${escapeHtml(step.question)}</h2>
      <div class="app-actions">
        <button type="button" data-target="yes">${escapeHtml(step.yesLabel)}</button>
        <button type="button" data-target="no" class="secondary">${escapeHtml(step.noLabel)}</button>
      </div>
    `;
    flowStep.querySelector('[data-target="yes"]').addEventListener("click", () => goTo(step.yes));
    flowStep.querySelector('[data-target="no"]').addEventListener("click", () => goTo(step.no));
    flowStep.focus();
  }

  function renderOutcome(outcome) {
    const bodyHtml = outcome.body ? `<p>${escapeHtml(outcome.body)}</p>` : "";
    const stepsHtml = outcome.steps
      ? `<p>Next steps:</p><ol>${outcome.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>`
      : "";
    const noteHtml = outcome.note ? `<p class="app-help-text">${escapeHtml(outcome.note)}</p>` : "";
    flowStep.innerHTML = `
      <h2>${escapeHtml(outcome.title)}</h2>
      ${bodyHtml}
      ${stepsHtml}
      ${noteHtml}
      <p><button type="button" id="flow-restart" class="secondary">Start over</button></p>
    `;
    flowStep.querySelector("#flow-restart").addEventListener("click", () => goTo(START_STEP));
    flowStep.focus();
  }

  function render() {
    if (typeof current === "string") renderQuestion(steps[current]);
    else renderOutcome(current);
  }

  render();
});
