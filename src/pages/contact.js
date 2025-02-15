import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import contactImg from "../images/businesscard.png";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={["contact", "empressive"]} title="Contact" />
      <section className="body relative">
        {/* <div className="absolute h-full w-full contact-overlay"></div> */}
        <section className="container p-3  md:mx-auto flex flex-wrap my-8">
          <div className="w-full md:flex-1">
            <div>
              <h2 className="contact-title">For Business Inquiries</h2>
            </div>
            <div className="my-4 text-gray-600">
              <p>
                Hello, thanks for visiting my page. If you have any business
                inquiries, you can contact me through my business email.
              </p>
            </div>
            <div className="font-bold mb-4 text-gray-700">
              Business Email: mgmt@empressive.tv
            </div>
            <div>
              <img alt="businesscard" src={contactImg} />
            </div>
          </div>
          <div className="w-full mt-4 md:m-auto md:flex-1">
            <form
              action="https://formspree.io/mlebeolo"
              className="mx-auto w-full md:w-2/3"
              method="POST"
            >
              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="name"
              >
                Name
              </label>

              <input
                className="appearance-none border border-1 border-gray-600 rounded block bg-white mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="name"
                name="name"
                placeholder="Bill"
                type="text"
                required
              />

              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="appearance-none border border-1 border-gray-600 rounded block bg-white mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="email"
                name="email"
                placeholder="bill@email.com"
                type="email"
                required
              />

              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="appearance-none border border-1 border-gray-600 rounded bg-white mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="message"
                placeholder=""
                rows="8"
                required
                name="message"
              />

              <button className=" contact-btn border-gray-800 hover:border-gray-700 font-bold px-4 py-2 rounded text-sm text-white">
                Submit
              </button>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ContactPage;
