defmodule Its.MediaFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Its.Media` context.
  """

  @doc """
  Generate a image.
  """
  def image_fixture(attrs \\ %{}) do
    {:ok, image} =
      attrs
      |> Enum.into(%{
        image_url: "some image_url"
      })
      |> Its.Media.create_image()

    image
  end
end
