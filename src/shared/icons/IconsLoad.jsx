import dynamic  from 'next/dynamic'
const IconsLoader = ({iconName, size, ...props}) => {
    const Icon = dynamic(() => import('react-icons/ri   ').then(mod => mod[iconName]), { ssr: false })
    return <Icon size={size} {...props} />
}

export default IconsLoader