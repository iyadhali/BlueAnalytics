"use client";
import Breadcrumb from "@/components/breadcrumbs/page";
import FormTabs from "@/components/Tabs/FormTabs";

const FormLayout: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Submit a Completed Event Details" />
      <div className="flex flex-col gap-9">
        <FormTabs />
      </div>
    </>
  );
};

export default FormLayout;
