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
          <div class="form-input-group">
            <label for="first-name">
              First Name<span class="required-label" aria-hidden="true">*</span>
            </label>
            <input 
              type="text" 
              id="first-name" 
              name="firstName" 
              autocomplete="given-name" 
              aria-invalid="false" 
              aria-describedby="firstName-error" 
              required
            />
            <p class="error-message" id="firstName-error" hidden></p>
          </div>
          <div class="form-input-group">
            <label for="last-name">
              Last Name<span class="required-label" aria-hidden="true">*</span>
            </label>
            <input 
              type="text" 
              id="last-name" 
              name="lastName"
              autocomplete="family-name" 
              aria-invalid="false" 
              aria-describedby="lastName-error"
              required 
            />
            <p class="error-message" id="lastName-error" hidden></p>
          </div>
        </div>
        <div class="form-input-group">
          <label for="email-address">
            Email Address<span class="required-label" aria-hidden="true">*</span>
          </label> 
          <input 
            type="email" 
            id="email-address" 
            name="emailAddress" 
            autocomplete="email" 
            aria-invalid="false" 
            aria-describedby="emailAddress-error" 
            required 
          />
          <p class="error-message" id="emailAddress-error" hidden></p>
        </div>
        <fieldset>
          <legend>
            Query Type<span class="required-label" aria-hidden="true">*</span>
          </legend>
          <div class="form-group">
            <label for="general-enquiry" class="form-radio-group">
              <input 
                type="radio" 
                id="general-enquiry" 
                name="queryType" 
                value="general-enquiry" 
                aria-invalid="false" 
                aria-describedby="queryType-error" 
                required
              />
              <span>General Enquiry</span>
            </label>
            <label for="support-request" class="form-radio-group">
              <input 
                type="radio" 
                id="support-request" 
                name="queryType" 
                value="support-request" 
                aria-invalid="false" 
                aria-describedby="queryType-error" 
                required
              />
              <span>Support Request</span>
            </label>
          </div>
          <p class="error-message" id="queryType-error" hidden></p>
        </fieldset>
        <div class="form-input-group">
          <label for="message">
            Message<span class="required-label" aria-hidden="true">*</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            aria-invalid="false" 
            aria-describedby="message-error" 
            required
          ></textarea>
          <p class="error-message" id="message-error" hidden></p>
        </div>
        <div class="form-checkbox-group">
          <label for="consent">
            <input 
              type="checkbox" 
              id="consent" 
              name="consent" 
              aria-invalid="false" 
              aria-describedby="consent-error" 
              required 
            />
            <p>I hereby consent to being contacted by the team<span class="required-label" aria-hidden="true">*</span></p>
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
      fieldElement.classList.add("error");
      errorFieldElements.push(fieldElement);
      fieldElement.setAttribute("aria-invalid", "true");
      const errorElement = this.shadow.getElementById(
        `${error.fieldName}-error`
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
    fieldElement.classList.remove("error");
    const fieldName = fieldElement.getAttribute("name");
    const errorElement = this.shadow.getElementById(`${fieldName}-error`);
    errorElement.textContent = "";
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
