import * as React from "react";
import NavigationBlock from "./base/NavigationBlock";

export default () => (
	<NavigationBlock element="rightwrapper">
		<NavigationBlock element="additionalwrapper">
			<NavigationBlock isMainBlock={false} element="right" modifier="buttons">
				<NavigationBlock isMainBlock={false} element="right" modifier="buttons_wrap">
					<NavigationBlock isMainBlock={false} element="right" modifier="buttons_but">
						<a className="t-btn">
							<table style={{ width: "100%", height: "100%" }}>
								<tbody>
									<tr>
										<td>Личный кабинет</td>
									</tr>
								</tbody>
							</table>
						</a>
					</NavigationBlock>
				</NavigationBlock>
			</NavigationBlock>
		</NavigationBlock>
	</NavigationBlock>
);
