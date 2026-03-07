export default async function PropertyPage({ params }) {
  const { id } = await params

  return (
    <div>
      Property Page {id}
    </div>
  )
}
