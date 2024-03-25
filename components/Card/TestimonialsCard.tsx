import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyTextField } from "@prismicio/client";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface ITestimonialsCard {
  description: KeyTextField
  name: KeyTextField
  job_title: KeyTextField
}

export default function TestimonialsCard({description, name, job_title}: ITestimonialsCard) {
  return <div className="bg-white px-8 py-5 rounded-xl shadow-primary-double">
    <div className="flex gap-3">
      <FontAwesomeIcon className="text-orange-500" icon={faQuoteLeft}/>
      <div>
        <p className="font-bold leading-6">{description}</p>
        <p className="font-bold leading-6 mt-3">{name}</p>
        <p className="mt-1 italic leading-6">{job_title}</p>
      </div>
    </div>
  </div>;
}
