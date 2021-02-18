import Link from 'next/link'

export default function Routes() {
  return(
    <div>
        <Link href={`/`}>HOME</Link>
        <Link href={`/institucional`}>INSTITUCIONAL</Link>
        <Link href={`/plans`}>PLANOS</Link>
        <Link href={`/contact`}>CONTATO</Link>
        <Link href={`/blog`}>BLOG</Link>
      </div>
  )
}