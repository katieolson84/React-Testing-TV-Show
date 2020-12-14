import React from "react";
import Episodes from "./Episodes";
import { render, screen } from "@testing-library/react";

//Sample Data of an episode
const episodesData = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
  },
];

test("Renders without errors", () => {
  render(<Episodes episodes={[]} />);
});

test("Rerenders with new props", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  rerender(<Episodes episodes={episodesData} />);

  const episodesList = screen.getAllByTestId(/episode/i);

  expect(episodesList).toHaveLength(1);
});
