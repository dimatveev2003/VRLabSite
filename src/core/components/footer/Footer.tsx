import Block from "../base/Block";
import { FooterBlock } from "../helpers/BlockHelpers";
import { Icon36LogoVk, Icon28GlobeOutline, Icon28LogoInstagram } from "@vkontakte/icons";
export default () => {
	return (
		<FooterBlock>
			<FooterBlock element="lower">
				<FooterBlock element="lower-content">
					<FooterBlock isMainBlock={false} element="lower-content" modifier="info">
						{`© ${new Date().getFullYear()} РХТУ им. Д.И. Менделеева | Кафедра Информационных Компьютерных Технологий`}
						<br />
						Копирование материалов запрещено
					</FooterBlock>

					<FooterBlock isMainBlock={false} element="lower-content" modifier="social">
						<FooterBlock isMainBlock={false} element="lower-content" modifier="phone">
							+7 (495) 495-21-26
						</FooterBlock>
						<a href="https://vk.com/ikt_muctr" target="_blank"> 
							<Icon36LogoVk />
						</a>
						<a href="http://ikt.muctr.ru" target="_blank">
							<Icon28GlobeOutline width={36} height={36} />
						</a>
						<a href=" https://www.instagram.com/ikt_muctr" target="_blank">
							<Icon28LogoInstagram width={36} height={36} />
						</a>
					</FooterBlock>
				</FooterBlock>
			</FooterBlock>
		</FooterBlock>
	);
};
