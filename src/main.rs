use components::editor::NoteEditor;
use yew::prelude::*;

mod components;

#[function_component]
fn App() -> Html {
    html! {
        <main class="main">
            <NoteEditor/>
        </main>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
