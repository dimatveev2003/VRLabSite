import * as React from "react";
import { MainServicesBlock } from "core/components/helpers/BlockHelpers";
import Block from "core/components/base/Block";
import VideoWrap from "./components/VideoWrap";

export default () => (
	<MainServicesBlock>
		<Block>
			<MainServicesBlock element="container">
				<MainServicesBlock isMainBlock={false} element="container" modifier="services">
					<MainServicesBlock isMainBlock={false} element="container" modifier="topwrapper">
						<MainServicesBlock isMainBlock={false} element="container" modifier="topwrapper-title">
							Наши услуги
						</MainServicesBlock>
						<MainServicesBlock isMainBlock={false} element="container" modifier="topwrapper-desc">
							Мы предлагаем доступ к разработанным нашей кафедрой интерактивным лабораторным работам в различных
							областях химии и химической технологии с применением технологий виртуальной реальности, веб-приложений,
							приложений для рабочего стола
						</MainServicesBlock>
					</MainServicesBlock>
				</MainServicesBlock>
			</MainServicesBlock>
			<MainServicesBlock element="container">
				<MainServicesBlock isMainBlock={false} element="container" modifier="row">
                    <VideoWrap videoId="hNAbQYU0wpg" />
                    <VideoWrap videoId="hNAbQYU0wpg" />
                    <VideoWrap videoId="hNAbQYU0wpg" />
                </MainServicesBlock>
			</MainServicesBlock>
		</Block>
	</MainServicesBlock>
);
