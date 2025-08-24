import CircleIcon from "@mui/icons-material/Circle";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ReaderCardProps = {
  name: string;
  image: string;
  pin: string;
  status: "online" | "busy" | "offline";
  skills: string[];
  callOptions: {
    label: string;
    number: string;
  }[];
  onCallNow: (key: string) => void;
};

const statusColors: Record<ReaderCardProps["status"], string> = {
  online: "#00C853",
  busy: "#FFA000",
  offline: "#B0BEC5",
};

export const ReaderCard: React.FC<ReaderCardProps> = ({
  name,
  image,
  pin,
  status,
  skills,
  callOptions,
  onCallNow,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
      }}
    >
      <CardHeader
        avatar={
          // <Avatar alt={name} sizes={"80x80"} sx={{ width: 80, height: 80 }}>
          //   <Image
          //     src={`/readers/${pin}.png`}
          //     alt="Amara"
          //     width={80}
          //     height={80}
          //     placeholder="blur"
          //     blurDataURL="/readers/blur.png"
          //   />
          // </Avatar>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CircleIcon fontSize="small" sx={{ color: statusColors[status] }} />
            <Typography variant="body2" color="textSecondary">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Typography>
          </Stack>
        }
        // title={name}
        // subheader={
        //   <Stack direction="row" alignItems="center" spacing={1}>
        //     <CircleIcon fontSize="small" sx={{ color: statusColors[status] }} />
        //     <Typography variant="body2" color="textSecondary">
        //       {status.charAt(0).toUpperCase() + status.slice(1)}
        //     </Typography>
        //   </Stack>
        // }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="textSecondary" mb={1}>
          <strong>PIN:</strong> {pin}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<PhoneIcon />}
          sx={{ marginBottom: 2 }}
          onClick={() => onCallNow(name.toLocaleLowerCase())}
        >
          {/* Call now - to be used on call now page*/}
          Call Options
        </Button>
        <Link href={`/psychic-readers/${name.toLocaleLowerCase()}`} passHref>
          <Button variant="outlined" fullWidth>
            View profile
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
