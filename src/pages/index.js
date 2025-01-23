import React from "react";
import Site from "@/components/templates/Site";
import ToTopPage from "@/components/atoms/ToTopPage";
import Welcome from "@/components/organism/Welcome";
import Statistic from "@/components/organism/Statistic";
import VisionAndMission from "@/components/organism/VisionAndMission";
import KataPengantar from "@/components/organism/KataPengantar";
import Register from "@/components/organism/Register";
import News from "@/components/organism/News/indes";
import Card from "@/components/atoms/Card";
import CardItem from "@/components/molecules/CardNewsItem";
import Invitation from "@/components/organism/Invitation";
import Testimoni from "@/components/organism/Testimoni";
import CardTestimoniItem from "@/components/molecules/CardTestimoniItem";
const index = () => {
  return (
    <>
      <Site>
        <ToTopPage />
        <Welcome />
        <Statistic />
        <VisionAndMission />
        <KataPengantar />
        <Register />
        <News>
          <Card>
            <CardItem
              image="/PII-320x220.jpg"
              alt="News Image"
              date="01"
              month="Apr"
              views="999"
              title="This Is News"
              brief="This is an exciting news!!!"
              link="#"
            />
          </Card>
          <Card>
            <CardItem
              image="/PII-320x220.jpg"
              alt="News Image"
              date="01"
              month="Apr"
              views="999"
              title="This Is News"
              brief="This is an exciting news!!!"
              link="#"
            />
          </Card>
          <Card>
            <CardItem
              image="/PII-320x220.jpg"
              alt="News Image"
              date="01"
              month="Apr"
              views="999"
              title="This Is News"
              brief="This is an exciting news!!!"
              link="#"
            />
          </Card>
          <Card>
            <CardItem
              image="/PII-320x220.jpg"
              alt="News Image"
              date="01"
              month="Apr"
              views="999"
              title="This Is News"
              brief="This is an exciting news!!!"
              link="#"
            />
          </Card>
        </News>
        <Invitation />
        <Testimoni>
          <Card>
            <CardTestimoniItem
              comment="Studying at FT UMT, you will learn a lot about the basics of
                  technology, especially the digital world, and knowledge about
                  how to prepare for the future world of work."
              avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              username="Faiz Muhammad Syam, S.Kom"
              status="Consultant at the Tangerang City Information Communication
                      Service (Programmer) and Designer (Freelance)"
            />
          </Card>
          <Card>
            <CardTestimoniItem
              comment="Studying at FT UMT, you will learn a lot about the basics of
                  technology, especially the digital world, and knowledge about
                  how to prepare for the future world of work."
              avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              username="Faiz Muhammad Syam, S.Kom"
              status="Consultant at the Tangerang City Information Communication
                      Service (Programmer) and Designer (Freelance)"
            />
          </Card>
          <Card>
            <CardTestimoniItem
              comment="Studying at FT UMT, you will learn a lot about the basics of
                  technology, especially the digital world, and knowledge about
                  how to prepare for the future world of work."
              avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              username="Faiz Muhammad Syam, S.Kom"
              status="Consultant at the Tangerang City Information Communication
                      Service (Programmer) and Designer (Freelance)"
            />
          </Card>
          <Card>
            <CardTestimoniItem
              comment="Studying at FT UMT, you will learn a lot about the basics of
                  technology, especially the digital world, and knowledge about
                  how to prepare for the future world of work."
              avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              username="Faiz Muhammad Syam, S.Kom"
              status="Consultant at the Tangerang City Information Communication
                      Service (Programmer) and Designer (Freelance)"
            />
          </Card>
        </Testimoni>
      </Site>
    </>
  );
};

export default index;
