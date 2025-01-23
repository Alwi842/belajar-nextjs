import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
const KataPengantar = () => {
  return (
    <>
      <section>
        <div className="lg:flex items-center justify-center h-full bg-white py-20">
          <div className="lg:w-1/2 lg:pl-20 pl-2">
            <Text className="pb-2 text-2xl font-bold" text="Dean's Welcome" />
            <Text
              className="pb-5 text-gray-600"
              text="Peace be upon you, and Allah mercy and blessings"
            />
            <Text className="text-3xl font-bold mb-4" text="SELAMAT DATANG" />

            <p style={{ textIndent: "16px" }} className="pb-5 text-gray-600">
              Praise and gratitude we offer to the presence of Allah SWT for His
              Grace and guidance so that the website of the Faculty of
              Engineering, University of Muhammadiyah can continue to develop.
              This website is a media of information for the academic community
              and one of the efforts in socializing the Vision, Mission, and
              Objectives of its Education. In addition, data regarding the
              Teaching Staff, Laboratory and activities of the catur dharma of
              higher education (teaching, research, community service and
              al-Islam kemuhammadiyahan) are also presented on this website. We
              hope that this portal can provide the best information for the
              community and especially the academic community and stakeholders
              who want to know more about the existence of the Faculty of
              Engineering, UMT.
            </p>
            <Text
              className="pb-5 text-gray-600"
              text="Wassalamualaikum Wr. Wb."
            />
            <Text className="font-bold" text="Rohmat Taufiq ST., M.Kom" />
          </div>

          <div className="lg:w-1/2 flex flex-col pt-10">
            <div className="h-1/2 flex items-center justify-center pb-10">
              <div className="text-white">
                <Image src="/wadek1ft.jpg" alt="DEKAN" width={200} height={0} />
                <Text
                  className="text-gray-500 italic text-[14px]"
                  text="Rohmat Taufiq ST., M.Kom"
                />
                <Text
                  className="text-gray-500 italic text-[14px]"
                  text="Dean of the Faculty of Engineering"
                />
              </div>
            </div>

            <div className="h-1/2 flex">
              <div className="w-1/2 flex items-center justify-center">
                <div className="text-white">
                  <Image
                    src="/Wadek-1-150x150.jpg"
                    alt="Deputy Dean "
                    width={200}
                    height={0}
                  />
                  <p className="text-gray-500 italic text-[14px]">
                    Dr., Ir. Sumardi Sadi, SPd., ST., MT
                  </p>
                  <p className="text-gray-500 italic text-[14px]">
                    Dean of the Faculty of Engineering
                  </p>
                </div>
              </div>

              <div className="w-1/2 flex items-center justify-center">
                <div className="text-black">
                  <Image
                    src="/wadek2-pwgyl8rb2hdd6siq08k4gffjofxank9v5j7zyxv2iw-150x150.jpg"
                    alt="Deputy Dean II "
                    width={200}
                    height={0}
                  />
                  <p className="text-gray-500 italic text-[14px]">
                    Tina Hernawati, ST, MT
                  </p>
                  <p className="text-gray-500 italic text-[14px]">
                    Deputy Dean II - Finance Bid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KataPengantar;
