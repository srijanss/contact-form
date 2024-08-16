import css from "./ContactForm.css?inline";

export default class ContactForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
    const form = this.shadow.querySelector(".contact-form");
    this.handleFormSubmit(form);
    this.handleInputChange(form);
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <form class="contact-form" novalidate>
        <div class="form-group">
          <label for="first-name">
            <span class="label-text">First Name</span>
            <input 
              type="text" 
              id="first-name" 
              name="firstName" 
              autocomplete="given-name" 
              aria-invalid="false" 
              aria-describedby="first-name-error" 
              required
            />
          </label>
          <p class="error-message" id="first-name-error" hidden></p>
        </div>
        <div class="form-group">
          <label for="last-name">
            <span class="label-text">Last Name</span>
            <input 
              type="text" 
              id="last-name" 
              name="lastName"
              autocomplete="family-name" 
              aria-invalid="false" 
              aria-describedby="last-name-error"
              required 
            />
          </label>
          <p class="error-message" id="last-name-error" hidden></p>
        </div>
        <div class="form-group">
          <label for="email-address">
            <span class="label-text">Email Address</span>
            <input 
              type="email" 
              id="email-address" 
              name="emailAddress" 
              autocomplete="email" 
              aria-invalid="false" 
              aria-describedby="email-address-error" 
              required 
            />
          </label> 
          <p class="error-message" id="email-address-error" hidden>
          Please enter a valid email address 
          </p>
        </div>
        <div class="form-group">
          <fieldset>
            <legend>
              <span class="label-text">Query Type</span>
            </legend>
            <input 
              type="radio" 
              id="general-enquiry" 
              name="queryType" 
              value="general-enquiry" 
              aria-invalid="false" 
              aria-describedby="query-type-error" 
              required
            />
            <label for="general-enquiry">General Enquiry</label>
            <input 
              type="radio" 
              id="support-request" 
              name="queryType" 
              value="support-request" 
              aria-invalid="false" 
              aria-describedby="query-type-error" 
              required
            />
            <label for="support-request">Support Request</label>
          </fieldset>
          <p class="error-message" id="query-type-error" hidden></p>
        </div>
        <div class="form-group">
          <label for="message">
            <span class="label-text">Message</span>
            <textarea 
              id="message" 
              name="message" 
              aria-invalid="false" 
              aria-describedby="message-error" 
              required
            ></textarea>
          </label>
          <p class="error-message" id="message-error" hidden></p>
        </div>
        <div class="form-group">
          <label for="consent">
            <input 
              type="checkbox" 
              id="consent" 
              name="consent" 
              aria-invalid="false" 
              aria-describedby="consent-error" 
              required 
            />
            <span class="label-text">I consent to being contacted by the team</label>
          </label>
          <p class="error-message" id="consent-error" hidden></p>
        </div>
        <button type="submit">Submit</button>
      </form>
      <toast-component></toast-component>
    `;
  }

  validateRequiredFields(data) {
    const requiredTextFields = [
      "firstName",
      "lastName",
      "emailAddress",
      "message",
    ];

    const requiredFieldErrors = [];
    for (const field of requiredTextFields) {
      if (!data[field].trim()) {
        requiredFieldErrors.push({
          fieldName: field,
          message: "This field is required",
        });
      }
    }

    if (!data.queryType) {
      requiredFieldErrors.push({
        fieldName: "queryType",
        message: "Please select a query type",
      });
    }

    if (!data.consent) {
      requiredFieldErrors.push({
        fieldName: "consent",
        message: "To submit this form, please consent to being contacted",
      });
    }

    return requiredFieldErrors;
  }

  validateEmail(email) {
    const emailErrors = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailErrors.push({
        fieldName: "emailAddress",
        message: "Please enter a valid email address",
      });
    }
    return emailErrors;
  }

  showError(form, errorList) {
    const errorFieldElements = [];
    for (const error of errorList) {
      const fieldElement = form.querySelector(`[name="${error.fieldName}"]`);
      errorFieldElements.push(fieldElement);
      fieldElement.setAttribute("aria-invalid", "true");
      const errorElement =
        fieldElement.parentElement.parentElement.querySelector(
          ".error-message"
        );
      errorElement.textContent = error.message;
      errorElement.hidden = false;
    }
    if (errorFieldElements.length > 0) {
      errorFieldElements[0].focus();
    }
  }

  hideError(fieldElement) {
    fieldElement.setAttribute("aria-invalid", "false");
    const errorElement =
      fieldElement.parentElement.parentElement.querySelector(".error-message");
    errorElement.hidden = true;
  }

  validateForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const requiredFieldErrors = this.validateRequiredFields(data);
    this.showError(form, requiredFieldErrors);
    if (!data.emailAddress.trim()) {
      return;
    }
    const emailErrors = this.validateEmail(data.emailAddress);
    this.showError(form, emailErrors);
    if (requiredFieldErrors.length > 0 || emailErrors.length > 0) {
      return;
    }
    return true;
  }

  handleFormSubmit(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validateForm(form)) {
        const toastComponent = this.shadow.querySelector("toast-component");
        toastComponent.render().then(() => {
          form.reset();
        });
      }
    });
  }

  handleInputChange(form) {
    const inputElements = form.querySelectorAll("input, textarea");
    Array.from(inputElements).forEach((input) => {
      input.addEventListener("input", () => {
        this.hideError(input);
      });
    });
  }
}
