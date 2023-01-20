import {
    ConfigProvider,
    Layout,
    Input,
    InputNumber,
    Button,
    Switch,
    Radio,
    Checkbox,
    Select,
    Card,
    Calendar,
    Form,
    Row,
    Col,
    Modal,
    Table,
    Tabs,
    Badge,
    Popover,
    Dropdown,
    List,
    Avatar,
    Breadcrumb,
    Steps,
    Spin,
    Menu,
    Drawer,
    Tooltip,
    Alert,
    Tag,
    Divider,
    DatePicker,
    TimePicker,
    Upload,
    Progress,
    Skeleton,
    Popconfirm,
    PageHeader,
    Result,
    Statistic,
    Descriptions,
    Space,
    Typography,
    Pagination
} from 'ant-design-vue'
import type { App } from 'vue'

// import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/dist/antd.less'
// import 'ant-design-vue/dist/antd.variable.min.css'
import 'ant-design-vue/dist/antd.variable.css'

// import 'ant-design-vue/dist/antd.dark.less'

// import 'ant-design-vue/dist/antd.dark.css'

// import 'ant-design-vue/dist/antd.dark.less'
export function setupAntd(app: App<Element>) {
    app.use(ConfigProvider)
        .use(Layout)
        .use(Input)
        .use(InputNumber)
        .use(Button)
        .use(Switch)
        .use(Radio)
        .use(Checkbox)
        .use(Select)
        .use(Card)
        .use(Form)
        .use(Row)
        .use(Col)
        .use(Modal)
        .use(Table)
        .use(Tabs)
        .use(Badge)
        .use(Popover)
        .use(Dropdown)
        .use(List)
        .use(Avatar)
        .use(Breadcrumb)
        .use(Steps)
        .use(Spin)
        .use(Menu)
        .use(Drawer)
        .use(Tooltip)
        .use(Alert)
        .use(Tag)
        .use(Divider)
        .use(DatePicker)
        .use(TimePicker)
        .use(Upload)
        .use(Progress)
        .use(Skeleton)
        .use(Popconfirm)
        .use(PageHeader)
        .use(Result)
        .use(Statistic)
        .use(Descriptions)
        .use(Space)
        .use(Typography)
        .use(Pagination)
        .use(Calendar)
}
