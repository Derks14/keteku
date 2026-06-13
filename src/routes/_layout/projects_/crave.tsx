import { createFileRoute } from "@tanstack/react-router";
import Card from "@/components/ui/card.tsx";

export const Route = createFileRoute("/_layout/projects_/crave")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Card className="w-full">
        <article className="p-8">
          <div className="mb-8">
            <p className="text-primary uppercase">distributed system</p>
          </div>
          {/*header*/}
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1/2 pr-8">
              <div className="text-4xl font-semibold">
                <h1>Building an inventory based commerce system</h1>
              </div>
              <div className="my-6">
                <p>
                  The project is set up to model a simple but realistic commerce flow: food,
                  inventory, order, notification api gateway services working cohesively. <br /> The
                  supporting infrastructure uses Docker Compose which brings up databases, a
                  distributed event streamer, kubernetes and Observability tools
                </p>
              </div>
            </div>
            <div className="flex flex-1/2 justify-between gap-8">
              <div className="grow">
                <div className="text-muted-foreground">
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p>JAVA</p>
                    </div>
                  </div>
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p>DOCKER COMPOSE</p>
                    </div>
                  </div>
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p> KAFKA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow">
                <div className="text-muted-foreground">
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p>MONGO, MYSQL</p>
                    </div>
                  </div>
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p>SPRING BOOT</p>
                    </div>
                  </div>
                  <div>
                    <div className="my-5">
                      <hr />
                    </div>
                    <div>
                      <p>OBSERVABILITY ( GRAFANA )</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-16">
            <div className="border-muted-foreground mx-auto w-5/6 rounded-2xl border p-2">
              <img
                className="rounded-2xl shadow-2xl"
                src="/src/assets/crave-architecture.png"
                alt="architecture diagram"
              />
            </div>
          </div>

          <div className="my-16">
            <div className="">
              <h2 className="my-4 text-3xl font-semibold">The Problem</h2>
            </div>
            {/*requirements*/}
            <div className="">
              <div className="flex justify-between gap-8">
                <div className="flex-1/2">
                  <div>
                    <h3 className="text-muted-foreground my-1 text-xl font-semibold">
                      Functional Specification
                    </h3>
                  </div>
                  <div className="">
                    <ul>
                      <li>1. User authentication and account management </li>
                      <li>
                        2. Users ( Admin ) should be able to add food and get all written updates
                      </li>
                      <li>
                        3. Users ( Admin ) should be able to update inventory and view stock
                        available.
                      </li>
                      <li>3. Users ( Customers ) should be able to place successful orders </li>
                      <li>
                        5. Users ( Customers ) should be able to receive updates and information
                        about their orders
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex-1/2">
                  <div>
                    <h3 className="text-muted-foreground my-1 text-xl font-semibold">
                      Non - Functional Specification
                    </h3>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        1. The system should prioritise strong data consistency, especially our
                        inventory service and admin facing services.
                      </li>
                      <li>
                        2. Our customer facing paths can keep a 99.9+ uptime while maintaining
                        eventual consistency
                      </li>
                      <li>3. inventory updates visible within 5-30s depending on subsyste</li>
                      <li>4. the systems 95 percentile </li>
                      {/*- 99.9% monthly uptime for ordering and checkout */}
                      {/*- p95 checkout latency under 2s*/}
                      {/*- no lost confirmed orders */}
                      {/*- idempotent order submission and payment capture */}
                      {/*- inventory updates visible within 5-30s depending on subsystem */}
                      {/*- service recovery within 5 min for critical components */}
                      {/*- encrypted data in transit and at rest */}
                      {/*- full audit trail for order and payment state changes*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <h2 className="my-4 text-3xl font-semibold">Setup and API Flow</h2>
            </div>

            <div>
              <div className="justify-between gap-16">
                <div className="flex-1/2">
                  <div>
                    <h3 className="text-muted-foreground my-1 text-xl font-semibold">
                      API Implementation
                    </h3>
                  </div>
                  {/* api implementation */}
                  <div className="mt-6 rounded-2xl bg-white/50 p-4 dark:bg-black/50">
                    <code className="">
                      <div className="flex justify-between">
                        <div className="my-2">
                          <div>POST /api/food</div>
                          <div>GET /api/food</div>
                        </div>

                        <div className="my-2">
                          <div>
                            <p>POST /api/place-orders</p>
                            <p className="text-sm">body: {` { userDetails: string }`}</p>
                          </div>
                        </div>

                        <div className="my-2">
                          <div>GET /api/inventory</div>
                        </div>
                      </div>
                    </code>
                  </div>
                </div>

                <div className="flex-1/2">
                  <div className="">
                    <h3 className="text-muted-foreground my-1 text-xl font-semibold">Data Flow</h3>
                  </div>
                  <div>
                    <img src="/src/assets/crave-dataflow.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-16">
            <div>
              <h2 className="my-4 text-3xl font-semibold">High Level Design</h2>
            </div>
            <div></div>
          </div>

          <div className="my-16">
            <div>
              <h2 className="my-4 text-3xl font-semibold">Technical Evaluation</h2>
            </div>
            <div></div>
          </div>

          <div className="my-16">
            <div>
              <h2 className="my-4 text-3xl font-semibold">Observability</h2>
            </div>
            <div></div>
          </div>
        </article>
      </Card>
    </>
  );
}
