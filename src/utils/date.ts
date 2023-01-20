import dayjs from 'dayjs'

export const formatDateTime = (
    date: string | number | Date | dayjs.Dayjs | null | undefined,
    format = 'YYYY-MM-DD HH:mm:ss'
) => {
    return date ? dayjs(date).format(format) : '--'
}
