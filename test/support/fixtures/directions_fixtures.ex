defmodule Its.DirectionsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Its.Directions` context.
  """

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        body: "some body",
        title: "some title"
      })
      |> Its.Directions.create_post()

    post
  end
end
