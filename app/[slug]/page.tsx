import { createClient } from "@/prismicio";
import React from "react";

interface IPage {
    slug: string
}
export default function Page({ params }: {
    params: IPage
}) {
    return <div>Slug page {params.slug}</div>;
}
