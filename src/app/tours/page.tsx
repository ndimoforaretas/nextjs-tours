import { RecommendedTour } from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: "draft",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    starts_with: "tour",
    version: "draft",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  return (
    <div>
      <StoryblokStory story={story} />;
      {tours.map((tour) => (
        <RecommendedTour story={tour} key={tour.content._uid} />
      ))}
    </div>
  );
};

export default ToursPage;
