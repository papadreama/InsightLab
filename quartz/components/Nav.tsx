import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Nav({ displayClass }: QuartzComponentProps) {
  return <div class="nav">
  <a href="/writing">Blog</a>
  <a href="/quotes">Collected Quotes</a>
  <a href="/public-notes/A-Course-on-Contemplative-Practices">Contemplative Studies</a>
  <a href="/essays">Essays</a>
  <a href="/public-notes">Notes</a>
</div>
}

export default (() => Nav) satisfies QuartzComponentConstructor
