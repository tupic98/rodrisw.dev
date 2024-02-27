import ContactPage from "@/components/ContactPage";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Me"} />
      {/* Contact Page Area start */}
      <ContactPage />
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34170.02312454348!2d-117.39596863051618!3d33.96307543086162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1707898344605!5m2!1sen!2sus"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default page;
