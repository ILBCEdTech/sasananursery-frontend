import React, { useState } from "react";

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  remark: "",
};

export const Donate = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });

  const rawApiBaseUrl =
    process.env.REACT_APP_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const apiBaseUrl = rawApiBaseUrl.replace(/\/$/, "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim()) {
      setFormStatus({ type: "error", message: "Please provide your name." });
      return;
    }
    if (!apiBaseUrl) {
      setFormStatus({
        type: "error",
        message: "Suggestion service is not configured yet.",
      });
      return;
    }

    setFormStatus({ type: "loading", message: "Sending your suggestion..." });
    const payload = {
      name: formData.name.trim(),
    };
    if (formData.email.trim()) {
      payload.email = formData.email.trim();
    }
    if (formData.phone.trim()) {
      payload.phone = formData.phone.trim();
    }
    if (formData.remark.trim()) {
      payload.remark = formData.remark.trim();
    }

    try {
      const response = await fetch(`${apiBaseUrl}/suggestions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const bodyText = await response.text();
        throw new Error(bodyText || `Failed to submit (${response.status})`);
      }
      setFormStatus({
        type: "success",
        message: "Thank you for sharing your idea.",
      });
      setFormData(defaultForm);
    } catch (error) {
      console.error(error);
      setFormStatus({
        type: "error",
        message: "Unable to submit the suggestion right now.",
      });
    }
  };

  const updateField = (field) => (event) => {
    setFormStatus({ type: "idle", message: "" });
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <section className="contact-page-sec" id="contact">
      <div className="container">
        <div className="contact-row">
          <div className="contact-page-form">
            <h2>Share a suggestion</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="single-input-field">
                <label className="suggestion-label" htmlFor="suggestion-name">
                  Your name
                </label>
                <input
                  id="suggestion-name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={updateField("name")}
                />
              </div>
              <div className="single-input-field">
                <label className="suggestion-label" htmlFor="suggestion-email">
                  Email
                </label>
                <input
                  id="suggestion-email"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={updateField("email")}
                />
              </div>
              <div className="single-input-field">
                <label className="suggestion-label" htmlFor="suggestion-phone">
                  Phone number
                </label>
                <input
                  id="suggestion-phone"
                  type="tel"
                  placeholder="+959 123-4567"
                  name="phone"
                  value={formData.phone}
                  onChange={updateField("phone")}
                />
              </div>
              <div className="message-input">
                <div className="single-input-field">
                  <label className="suggestion-label" htmlFor="suggestion-remark">
                    Remark
                  </label>
                  <textarea
                    id="suggestion-remark"
                    placeholder="Share your remark"
                    name="remark"
                    value={formData.remark}
                    onChange={updateField("remark")}
                  />
                </div>
              </div>
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Suggestion" />
              </div>
            </form>
            {formStatus.message && (
              <p
                role="status"
                className={`contact-form__status contact-form__status--${formStatus.type}`}
              >
                {formStatus.message}
              </p>
            )}
          </div>
          <div className="contact-page-map">
            <iframe
              title="Monastery location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15259.132572683468!2d96.1954226!3d17.0343039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19b5a4b621345%3A0x5755adae7021ec6a!2sSarsana%20Nursery%20Monastery!5e0!3m2!1sen!2smm!4v1568866626397!5m2!1sen!2smm"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
