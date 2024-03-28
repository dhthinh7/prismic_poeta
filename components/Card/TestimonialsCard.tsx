import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyTextField, RichTextField } from "@prismicio/client";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import RichText from "../Shared/RichText";

interface ITestimonialsCard {
  description: RichTextField
  name: RichTextField
  job_title: RichTextField
}

export default function TestimonialsCard({description, name, job_title}: ITestimonialsCard) {
  return <div className="bg-white px-8 py-5 rounded-xl shadow-primary-double">
    <div className="flex gap-3">
      <FontAwesomeIcon className="text-orange-500" icon={faQuoteLeft}/>
      <div>
        <RichText field={description}/>
        <RichText field={name} />
        <RichText field={job_title} />
      </div>
    </div>
  </div>;
}
