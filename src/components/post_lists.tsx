import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function RetrieveLists({ children }: Props) {
    return (
        <nav className="lg:text-sm lg:leading-6 relative">
            {children}
        </nav>
    )
}
