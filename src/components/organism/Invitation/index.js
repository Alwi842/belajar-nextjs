import React from "react";
import Text from "@/components/atoms/Text";
import ProgressBar from "@/components/atoms/ProgressBar";
const Invitation = () => {
  return (
    <>
      <section>
        <div className="lg:px-48 px-2 py-32 items-center justify-center text-center">
          <Text
            className="lg:text-[40px] text-[20px] pb-4"
            text="UMT's engineering faculty is always developing and improving our
            services"
          />
          <Text className="pb-4 text-gray-500" text="Everyone is Invited" />
          <ProgressBar color="bg-[#00ce1b]" progress="90" />
        </div>
      </section>
    </>
  );
};

export default Invitation;
