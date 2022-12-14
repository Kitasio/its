defmodule ItsWeb.ImageLive.Index do
  use ItsWeb, :live_view

  alias Its.Media
  alias Its.Media.Image
  alias Its.Accounts

  @impl true
  def mount(_params, session, socket) do
    user = Accounts.get_user_by_session_token(session["user_token"])

    socket =
      socket
      |> assign(:images, list_user_images(user))
      |> assign(:user, user)

    {:ok, socket}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Image")
    |> assign(:image, Media.get_image!(id))
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Image")
    |> assign(:user, socket.assigns.user)
    |> assign(:image, %Image{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Images")
    |> assign(:image, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    image = Media.get_image!(id)
    {:ok, _} = Media.delete_image(image)

    {:noreply, assign(socket, :images, list_user_images(socket.assigns.user))}
  end

  defp list_user_images(user) do
    Media.list_user_images(user)
  end
end
