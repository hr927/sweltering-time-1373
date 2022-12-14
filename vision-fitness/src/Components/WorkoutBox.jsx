import { Box, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WorkoutBox({ image, title, subtitle, detail, id }) {
  const navigate = useNavigate();
  return (
    <Box
      _hover={{ border: "2px", borderColor: "#4296cb" }}
      onClick={() => navigate(`/workout/${id}`)}
      textAlign={"left"}
      bgColor={"white"}
    >
      <img src={image} alt="" width={"100%"} />
      <Stack p={"5"}>
        <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
          {title}
        </Text>
        <Text>{subtitle}</Text>
        <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
          {detail}
        </Text>
      </Stack>
    </Box>
  );
}

export default WorkoutBox;
