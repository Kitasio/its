defmodule ItsWeb.LiveHelpers do
  use Phoenix.Component

  import Phoenix.LiveView
  import Phoenix.LiveView.Helpers

  alias Phoenix.LiveView.JS

  @doc """
  Renders a live component inside a modal.

  The rendered modal receives a `:return_to` option to properly update
  the URL when the modal is closed.

  ## Examples

      <.modal return_to={Routes.post_index_path(@socket, :index)}>
        <.live_component
          module={ItsWeb.PostLive.FormComponent}
          id={@post.id || :new}
          title={@page_title}
          action={@live_action}
          return_to={Routes.post_index_path(@socket, :index)}
          post: @post
        />
      </.modal>
  """
  def modal(assigns) do
    assigns = assign_new(assigns, :return_to, fn -> nil end)

    ~H"""
    <div id="modal" class="phx-modal fade-in" phx-remove={hide_modal()}>
      <div
        id="modal-content"
        class="phx-modal-content fade-in-scale"
        phx-click-away={JS.dispatch("click", to: "#close")}
        phx-window-keydown={JS.dispatch("click", to: "#close")}
        phx-key="escape"
      >
        <%= if @return_to do %>
          <%= live_patch "✖",
            to: @return_to,
            id: "close",
            class: "phx-modal-close",
            phx_click: hide_modal()
          %>
        <% else %>
          <a id="close" href="#" class="phx-modal-close" phx-click={hide_modal()}>✖</a>
        <% end %>

        <%= render_slot(@inner_block) %>
      </div>
    </div>
    """
  end

  defp hide_modal(js \\ %JS{}) do
    js
    |> JS.hide(to: "#modal", transition: "fade-out")
    |> JS.hide(to: "#modal-content", transition: "fade-out-scale")
  end

  def editor(assigns) do
    ~H"""
    <div x-data={"editor('#{@text}')"}>
        <template x-if="isLoaded()">
          <div class="menu">
            <div
              @click="toggleHeading({ level: 1 })"
              class="btn p-2 rounded transition-all cursor-pointer"
              :class="{ 'fill-yellow-light bg-orange-dark': isActive('heading', { level: 1 }, updatedAt) }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path  :class="{ 'fill-yellow-light': isActive('heading', { level: 1}, updatedAt)}"d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" fill="rgba(255,255,255,1)"/></svg>
            </div>
            <div
              @click="toggleBold()"
              class="btn p-2 rounded transition-all cursor-pointer"
              :class="{ 'fill-yellow-light bg-orange-dark' : isActive('bold', updatedAt) }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :class="{ 'fill-yellow-light': isActive('bold', updatedAt)}" d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" fill="rgba(255,255,255,1)"/></svg>
            </div>
            <div
              @click="toggleItalic()"
              class="btn p-2 rounded transition-all cursor-pointer"
              :class="{ 'fill-yellow-light bg-orange-dark' : isActive('italic', updatedAt) }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path  :class="{ 'fill-yellow-light': isActive('italic', updatedAt)}"d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" fill="rgba(255,255,255,1)"/></svg>
            </div>
            <div
              @click="addImage()"
              class="btn p-2 rounded transition-all cursor-pointer"
              :class="{ 'fill-yellow-light bg-orange-dark' : isActive('image', updatedAt) }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :class="{ 'fill-yellow-light': isActive('image', updatedAt)}" d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(255,255,255,1)"/></svg>
            </div>
          </div>
        </template>

        <div x-ref="element"></div>


      <style>
        body { margin: 2rem; font-family: sans-serif; }
        .menu { display: flex; gap: 5px;}
        .btn.is-active { background: black; color: white; }
        .ProseMirror { padding: 0.5rem 1rem; margin: 1rem 0; border: 1px solid #ccc; }
      </style>

    </div>
    """
  end
end
