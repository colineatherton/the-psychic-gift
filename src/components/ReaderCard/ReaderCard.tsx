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
  Container,
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

const statusLabels: Record<ReaderCardProps["status"], string> = {
  online: "Ready to talk",
  busy: "In a reading",
  offline: "Away right now",
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
        border: "solid 1px #a99fd1",
        boxShadow: 4, // default elevation
        "&:hover": {
          boxShadow: 10, // higher elevation on hover
        },
      }}
    >
      <CardHeader
        avatar={
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <CircleIcon fontSize="small" sx={{ color: statusColors[status] }} />
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="0.85rem"
              color="#7a8486"
              lineHeight="1"
              variant="body2"
              component="p"
            >
              {statusLabels[status]}
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
      <CardContent sx={{ flexGrow: 1, pt: 0 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={2}
          mb={2}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Avatar
            alt={name}
            sizes={"80x80"}
            sx={{ width: 80, height: 80, border: "solid 2px #745ddd", mb: 2 }}
          >
            <Image
              src={`/readers/${pin}.png`}
              alt="Amara"
              width={80}
              height={80}
              placeholder="blur"
              blurDataURL="/readers/blur.png"
            />
          </Avatar>
          <Typography
            fontFamily="Montserrat Variable, sans-serif"
            fontWeight={500}
            fontSize="1.1rem"
            color="#7a8486"
            lineHeight="1"
            variant="body2"
            component="p"
            mb={2}
            textAlign={"center"}
          >
            {name}
          </Typography>
        </Box>
        {/* image */}
        {/* tags */}
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                backgroundColor: "#8174bb",
                color: "#f8f7ff",
                fontFamily: "Montserrat Variable, sans-serif",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color="#7a8486"
          lineHeight="1"
          variant="body2"
          component="p"
          mb={2}
          textAlign={"center"}
        >
          PIN: {pin}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          startIcon={<PhoneIcon />}
          sx={{ marginBottom: 2, backgroundColor: "#745ddd", borderRadius: 4 }}
          onClick={() => onCallNow(name.toLocaleLowerCase())}
        >
          {/* Call now - to be used on call now page*/}
          Call Options
        </Button>
        <Link href={`/psychic-readers/${name.toLocaleLowerCase()}`} passHref>
          <Button
            variant="outlined"
            fullWidth
            sx={{ borderColor: "#745ddd", borderRadius: 4, color: "#745ddd" }}
          >
            View profile
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
