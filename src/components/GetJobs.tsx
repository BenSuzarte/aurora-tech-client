import axios from "axios";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { JobSchema } from "@/schema/Job";
import { z } from "zod";

const GetJobs = () => {
  const [jobs, setJobs] = useState<z.infer<typeof JobSchema>[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobs || jobs.length === 0) {
    return <div>No jobs found.</div>;
  }

  function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
       return text;
    }
    
    const truncated = text.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
       return truncated + '...';
    }
    return truncated.substring(0, lastSpaceIndex) + '...';
 }

  return (
    <div>
      {jobs.map((job, index) => (
        <Card className="m-6" key={index}>
          <CardHeader>
            <CardTitle>{job.titulo}</CardTitle>
            <CardDescription className="flex">
              <p className="mr-2">Rocketseat Brasil</p>
              <p>{job.localidade}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: truncateText(job.descricao, 500) }} />
            <Button className="mt-4">Visualizar</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default GetJobs;
