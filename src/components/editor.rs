use web_sys::HtmlElement;
use yew::prelude::*;

#[function_component]
pub fn NoteEditor() -> Html {
    let editor_ref = use_node_ref();
    let _editor_ref = editor_ref.clone();
    let oninput = Callback::from(move |_: InputEvent| {
        let _editor = _editor_ref
            .cast::<HtmlElement>()
            .expect("editor_red not attached to div element");
        web_sys::console::log_1(&_editor.inner_text().into());
    });

    html! {
        <div
            contenteditable="true"
            spellcheck="false"
            class="editor"
            ref={editor_ref}
            {oninput}
        />
    }
}
