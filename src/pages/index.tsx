import { convert } from "@/components/markdown"
import TestRequest from "@/components/request"

export default function Home() {
  return (
    <div>
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
      <TestRequest />
      <article className="dark:bg-neutral-700 prose dark:prose-invert">
        {convert(`
# Markdown Test

- list 1
- list 2

| test | table |
| :- | -: |
| value1 | value2 |
| value1 | value2 |
| value1 | value2 |


## Tasklist

* [ ] to do
* [x] done

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.
`)}
      </article>
    </div>
  )
}