import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import Infobox from "~/components/starter/infobox/infobox";


export default component$(() => {
  return (
    <>
      <div class="container container-flex">
        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example For Link Component Not Working
            </div>
            <p>
              Have a look at the <Link href="/demo/todolist">Using the Link</Link> or the{" "}
              <a href="/demo/todolist">Using the a tag</a>.
            </p>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
