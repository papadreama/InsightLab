import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const banner = fileData.frontmatter?.banner
  const subtitle = fileData.frontmatter?.subtitle
  if (title && banner) {
    return <div><img class="banner-img" src={banner}></img><h2 class={classNames(displayClass, "article-title")}>{title}</h2></div>
  }
  if (title && subtitle) {
    return <div><h1 class={classNames(displayClass, "article-title")}>{title}</h1><h2 class={classNames(displayClass, "article-subtitle")}>{subtitle}</h2></div>
  } 
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  }
  else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
