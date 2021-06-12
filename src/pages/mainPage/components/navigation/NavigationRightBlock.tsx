import * as React from "react";
import NavigationBlock from "./base/NavigationBlock";
import Link from "next/link";

export default () => (
	<NavigationBlock element="rightwrapper">
		<NavigationBlock element="additionalwrapper">
			<NavigationBlock isMainBlock={false} element="right" modifier="buttons">
				<NavigationBlock isMainBlock={false} element="right" modifier="buttons_wrap">
					<NavigationBlock isMainBlock={false} element="right" modifier="buttons_but">
						<Link href="/login">
							<a className="t-btn">
								<table style={{ width: "100%", height: "100%" }}>
									<tbody>
										<tr>
											<td>Личный кабинет</td>
										</tr>
									</tbody>
								</table>
							</a>
						</Link>
					</NavigationBlock>
				</NavigationBlock>
			</NavigationBlock>
		</NavigationBlock>
	</NavigationBlock>
);
