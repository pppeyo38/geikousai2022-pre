export const CountDown = () => {
  const formatDate = (date: Date): string => {
    const y: number = date.getFullYear()
    const m: string = ('00' + (date.getMonth() + 1)).slice(-2)
    const d: string = ('00' + date.getDate()).slice(-2)
    return `${y + '-' + m + '-' + d}`
  }

  const howManyDays = () => {
    const nowDate: Date = new Date(formatDate(new Date()))
    const geikosaiDate: Date = new Date('2022-10-22')

    const diffDay: number = Math.floor(
      (geikosaiDate.getTime() - nowDate.getTime()) / 86400000
    )
    return diffDay
  }

  return (
    <>
      <p>
        芸工祭まで
        <span style={{ margin: '12px', fontFamily: 'Pixel', fontSize: '32px' }}>
          {howManyDays()}
        </span>
        日
      </p>
    </>
  )
}
