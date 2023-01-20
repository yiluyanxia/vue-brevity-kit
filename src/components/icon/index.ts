import { createVNode } from 'vue'
import * as AntIcon from '@ant-design/icons-vue'

interface Props {
    icon: string
}
export default (props: Props) => {
    const { icon } = props
    return createVNode(AntIcon[icon])
}
