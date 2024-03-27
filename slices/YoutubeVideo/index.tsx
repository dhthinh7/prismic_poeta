import SectionWrapper from "@/components/Shared/SectionWrapper";
import YoutubeVideoWrapper from "@/components/Video/YoutubeVideoWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `YoutubeVideo`.
 */
export type YoutubeVideoProps = SliceComponentProps<Content.YoutubeVideoSlice>;

/**
 * Component for "YoutubeVideo" Slices.
 */
const YoutubeVideo = ({ slice }: YoutubeVideoProps): JSX.Element => {
  const { video_id } = slice.primary
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionWrapper className="!max-w-[800px]">
        <YoutubeVideoWrapper videoId={video_id}/>
      </SectionWrapper>
    </section>
  );
};

export default YoutubeVideo;
