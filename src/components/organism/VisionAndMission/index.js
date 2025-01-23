import React from "react";
import Text from "@/components/atoms/Text";

const VisionAndMission = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/Raker-ft-23-scaled.jpg')" }}
      >
        <div className="lg:flex items-center justify-center h-full bg-black/50 py-20">
          {/* <!-- Left Side Content --> */}
          <div className="lg:w-1/2 text-white font-bold pl-20">
            <Text className="pb-5" text="FACULTY OF ENGINEERING" />
            <Text className="text-5xl pb-5" text="Faculty VISION" />
            <Text
              className="text-3xl pb-5"
              text="Becoming a World Class Engineering Faculty that is Humanistic and
              Islamic Based on Green Industry"
            />
          </div>

          {/* <!-- Right Side White Card --> */}
          <div className="lg:w-1/2 bg-white text-black px-10 py-10">
            <Text className="text-3xl pb-4" text="Faculty MISSION" />
            <ul className="list-disc pl-5 text-red-700">
              <li>
                <Text
                  text="Faculty Organizing quality education with an Islamic perspective
                according to Muhammadiyah's understanding and inclusiveness
                based on green industry with international standards."
                />
              </li>
              <li>
                <Text
                  text="Conducting international standard research and development of
                science and community service based on green industry."
                />
              </li>
              <li>
                <Text
                  text="Organizing cooperation with other parties in the development of
                internationally standardized humanistic science and technology
                based on green industry."
                />
              </li>
              <li>
                <Text text="Implementing Good Governance." />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionAndMission;
