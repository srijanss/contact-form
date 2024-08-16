(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const n=`:host,:host *,:host :after,:host :before{box-sizing:border-box}:host{color:var(--color-grey-900);font-family:var(--default-font-family);font-variation-settings:"wght" var(--fw-regular)}:host p{margin:0;padding:0}:host p{font-size:1rem;font-variation-settings:"wght" var(--fw-regular);line-height:1.5}:host input,:host textarea{margin:0;padding:0}:host form{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1.5rem}:host form label,:host form legend{font-size:1rem;line-height:1.5}:host form label .required-label,:host form legend .required-label{color:var(--color-green-600);margin-left:.5rem}:host form .error-message{color:var(--color-error)}:host form .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:.5rem}@media (min-width:768px){:host form .form-group{flex-direction:row;gap:1rem}}:host form .form-input-group{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:.5rem}@media (min-width:768px){:host form .form-input-group{flex:1}}:host form .form-input-group input,:host form .form-input-group textarea{border:1px solid var(--color-grey-500);border-radius:.5rem;font-size:1.125rem;line-height:1.5;padding:.75rem 1.5rem}:host form .form-input-group input:hover,:host form .form-input-group textarea:hover{border-color:var(--color-green-600)}:host form .form-input-group input.error,:host form .form-input-group textarea.error{border-color:var(--color-error)}:host form .form-input-group input{height:51px}:host form .form-input-group textarea{height:240px}@media (min-width:768px){:host form .form-input-group textarea{height:105px}}:host form fieldset{border:none;margin:0;padding:0}:host form fieldset legend{margin-bottom:1rem}:host form fieldset label{align-items:center;display:block;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.125rem;height:51px;line-height:1.5;padding-left:3.75rem;position:relative;width:100%}:host form fieldset label span{pointer-events:none;position:relative;z-index:1}:host form fieldset input[type=radio]{--circle-size:1.25rem;appearance:none;-webkit-appearance:none;-moz-appearance:none;border:1px solid var(--color-grey-500);border-radius:.5rem;height:100%;left:0;padding:.75rem 1.5rem;position:absolute;top:0;width:100%;z-index:0}:host form fieldset input[type=radio]:before{border:2px solid var(--color-grey-500);border-radius:50%;box-sizing:border-box;content:"";height:var(--circle-size);left:1.5rem;position:absolute;top:calc(50% - var(--circle-size)/2);width:var(--circle-size)}:host form fieldset input[type=radio]:hover{border-color:var(--color-green-600)}:host form fieldset input[type=radio]:checked{background-color:var(--color-green-200);border-color:var(--color-green-600)}:host form fieldset input[type=radio]:checked:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='21' fill='none' viewBox='0 0 20 21'%3E%3Cpath fill='%230C7D69' d='M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75m0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75m5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:20px;border:none}:host form fieldset .error-message{margin-top:1rem}:host form .form-checkbox-group{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:.5rem;margin:1rem 0}:host form .form-checkbox-group label{align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;gap:1rem;padding-right:1.5rem}:host form .form-checkbox-group label input[type=checkbox]{--checkbox-size:1.125rem;appearance:none;-webkit-appearance:none;-moz-appearance:none;border:2px solid var(--color-grey-500);border-radius:.15rem;flex-shrink:0;height:1.125rem;height:var(--checkbox-size);width:1.125rem;width:var(--checkbox-size)}:host form .form-checkbox-group label input[type=checkbox]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='%230C7D69' d='M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0m-3.22 7.28-5.25 5.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:contain;border:none}:host form button{background-color:var(--color-green-600);border:none;border-radius:.5rem;color:var(--color-white);cursor:pointer;font-family:var(--default-font-family);font-size:1.125rem;font-variation-settings:"wght" var(--fw-bold);line-height:1.5;padding:1rem 0}:host form button:hover{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.314)));background-image:linear-gradient(90deg,#00000050)}`;class l extends HTMLElement{constructor(){super()}connectedCallback(){this.shadow=this.attachShadow({mode:"open"}),this.render();const e=this.shadow.querySelector(".contact-form");this.handleFormSubmit(e),this.handleInputChange(e)}render(){this.shadow.innerHTML=`
      <style>
        ${n}
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
    `}validateRequiredFields(e){const a=["firstName","lastName","emailAddress","message"],o=[];for(const r of a)e[r].trim()||o.push({fieldName:r,message:"This field is required"});return e.queryType||o.push({fieldName:"queryType",message:"Please select a query type"}),e.consent||o.push({fieldName:"consent",message:"To submit this form, please consent to being contacted"}),o}validateEmail(e){const a=[];return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||a.push({fieldName:"emailAddress",message:"Please enter a valid email address"}),a}showError(e,a){const o=[];for(const r of a){const t=e.querySelector(`[name="${r.fieldName}"]`);t.classList.add("error"),o.push(t),t.setAttribute("aria-invalid","true");const i=this.shadow.getElementById(`${r.fieldName}-error`);i.textContent=r.message,i.hidden=!1}o.length>0&&o[0].focus()}hideError(e){e.setAttribute("aria-invalid","false"),e.classList.remove("error");const a=e.getAttribute("name"),o=this.shadow.getElementById(`${a}-error`);o.textContent="",o.hidden=!0}validateForm(e){const a=new FormData(e),o=Object.fromEntries(a),r=this.validateRequiredFields(o);if(this.showError(e,r),!o.emailAddress.trim())return;const t=this.validateEmail(o.emailAddress);if(this.showError(e,t),!(r.length>0||t.length>0))return!0}handleFormSubmit(e){e.addEventListener("submit",a=>{a.preventDefault(),this.validateForm(e)&&this.shadow.querySelector("toast-component").render().then(()=>{e.reset()})})}handleInputChange(e){const a=e.querySelectorAll("input, textarea");Array.from(a).forEach(o=>{o.addEventListener("input",()=>{this.hideError(o)})})}}const d=`:host,:host *,:host :after,:host :before{box-sizing:border-box}:host{color:var(--color-white);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--default-font-family);font-variation-settings:"wght" var(--fw-regular);justify-content:center;left:0;padding:1.5rem;position:fixed;top:0;width:100%}:host h2,:host p{margin:0;padding:0}:host h2{--icon-size:1.5rem;font-size:1.125rem;font-variation-settings:"wght" var(--fw-bold);line-height:1.5;padding-left:2.1rem;padding-left:calc(var(--icon-size) + .6rem);position:relative}:host h2:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='21' fill='none' viewBox='0 0 20 21'%3E%3Cpath fill='%23fff' d='M14.28 7.72a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0m5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75m-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:20px;content:"";height:var(--icon-size);left:0;position:absolute;top:calc(50% - var(--icon-size)/2);width:var(--icon-size)}:host p{color:var(--color-green-200);font-size:1rem;font-variation-settings:"wght" var(--fw-regular);line-height:1.5;margin-top:.5rem}:host article{background-color:var(--color-grey-900);border-radius:.75rem;padding:1.5rem}`;class m extends HTMLElement{constructor(){super()}connectedCallback(){this.shadow=this.attachShadow({mode:"open"})}render(){return this.shadow.innerHTML=`
      <style>
        ${d}
      </style>
      <article class="toast" aria-live="assertive" role="alert" aria-atomic="true">
        <h2>Message Sent!</h2>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </article>
    `,this.removeToastMessage(),new Promise(e=>{e()})}removeToastMessage(){setTimeout(()=>{this.shadow.innerHTML=""},5e3)}}customElements.define("contact-form",l);customElements.define("toast-component",m);
