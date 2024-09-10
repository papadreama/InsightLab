import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Nav({ displayClass }: QuartzComponentProps) {
  return <div class="nav"><p>TESTING</p></div>
}

export default (() => Nav) satisfies QuartzComponentConstructor
