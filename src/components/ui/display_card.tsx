import { ReactNode } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

export const DisplayCard = ({ children, has_link }: { children: ReactNode, has_link?: string}) => {
  return (
      <div className="flex h-full flex-col-reverse p-4 md:p-6">
        <div className="flex justify-between items-center">
          <div>{children}</div>


          {/* show button icon if item has a link or gets highlighted*/}
          { !!has_link &&
            <div>
              <ImArrowUpRight2 />

            </div>
          }
 
        </div>
        <div className="">Put photos and graphics here</div>
      </div>
  )
}