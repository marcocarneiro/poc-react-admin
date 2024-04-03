import Stack from '@mui/material/Stack'
import { Card, CardContent, CardHeader } from "@mui/material"
import { Link } from "@mui/material"
import Typography from '@mui/material/Typography'
import PostIcon from "@mui/icons-material/Book"
import UserIcon from "@mui/icons-material/Group"

export const Dashboard = () => (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: '100%' }}
    >
        <Stack>
            <Link href="#/users" sx={{ textDecoration: "none" }} >
                <Card>
                    <CardHeader title="Usuários" />
                    <CardContent>
                        <UserIcon />
                        <Typography variant="p" component="div">
                            Lista com todos os usuários
                        </Typography>          
                    </CardContent>
                </Card>
            </Link>
        </Stack>

        <Stack>
            <Link href="#/posts" sx={{ textDecoration: "none" }} >
                <Card>
                    <CardHeader title="Posts" />
                    <CardContent>
                        <PostIcon />
                        <Typography variant="p" component="div">
                            Posts dos usários
                        </Typography>          
                    </CardContent>
                </Card>
            </Link>
        </Stack>                
    </Stack>
)