import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const showData = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _links: {
      self: { href: "http://api.tvmaze.com/shows/2993" },
      previousepisode: { href: "http://api.tvmaze.com/episodes/1576476" },
    },
    _embedded: {
      episodes: [
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
          _links: { self: { href: "http://api.tvmaze.com/episodes/553946" } },
        },
        
      ],
    },
  },
};

jest.mock("./api/fetchShow.js");

test("render shows", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  render(<App />);

  expect(await screen.findByText(/A love letter to the '80s/i));
  const selectSeason = screen.getByText(/Select a season/i);

  //Dropdown works
  userEvent.click(selectSeason);
  userEvent.click(screen.getByText(/Season 1/i));

  await waitFor(() => screen.getAllByTestId(/episode/i));

  expect(screen.getAllByTestId(/episode/i)).toHaveLength(1);
});


