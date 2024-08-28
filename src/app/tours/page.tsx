import { RecommendedTour } from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    starts_with: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />;
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map(
          (tour) =>
            // ignore tours with the name "Tours"
            tour.name !== "Tours" && (
              <RecommendedTour story={tour} key={tour.content._uid} />
            )
        )}
      </div>
    </div>
  );
};

export default ToursPage;
