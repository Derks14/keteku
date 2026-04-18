import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { SpotifyService } from "@/services/api/spotify.service.ts";
import { Button } from "@/components/ui/button.tsx";

export const Route = createFileRoute('/_layout/startspotify')({
  component: RouteComponent,
})

function RouteComponent() {

  const handleConnectSpotify = () => {
    window.open(SpotifyService.login(), "_blank")
  }
  return <>
    <Wrapper page="Blog" row_cols_class="md:grid-cols-3 md:grid-rows-3">
      <Card>
        <div className="p-8">
          <div className="p-4">Click button to start spotify</div>
          <div>
            <Button onClick={handleConnectSpotify}>Login</Button>
          </div>
        </div>
      </Card>
    </Wrapper>
  </>
}
