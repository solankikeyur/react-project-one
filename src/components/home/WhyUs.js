import React from "react";
import WhyUsImg from "../../assets/img/whyus.webp";

const WhyUs = () => {
  const content = [
    {
      title: "Top 1% IT Talent",
      desc: "Bacancy is an exclusive hub of top dedicated software developers, UI/UX designers, QA experts, and product managers with an incredibly rare and hidden talents you will ever come across. We let you access the top 1% IT talent from independent software developers to the fully managed teams.",
    },
    {
      title: "Time Zone Aligned",
      desc: "Timezone is never a constraint when you are working with Bacancy. We follow one very simple principle – our developers and your time zone. Get dedicated software developers from us and make collaboration in a faraway to work according to your time zone, deadline, and milestone.",
    },
    {
      title: "Experienced Team",
      desc: "Whether you are looking for skilled developers in emerging technologies or looking for an extended arms to augment your existing team, we can lend a helping hand in both situations. We are a full-stack software development company with 1050+ skilled and experienced software developers whom you can hire at your convenience to address the ongoing business challenges.",
    },
  ];
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src={WhyUsImg}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {content.map((value) => (
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  {value.title}
                </h2>
                <p class="leading-relaxed text-base">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
